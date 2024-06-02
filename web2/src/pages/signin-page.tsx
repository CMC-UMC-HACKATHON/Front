import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LogoIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { login } from "@/services/members.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signinSchema = z.object({
  loginId: z
    .string()
    .min(1, { message: "해당 필드는 필수 입력 필드입니다." })
    .max(15, { message: "해당 필드는 15자 이하여야 합니다." }),
  password: z.string().min(1, { message: "해당 필드는 필수 입력 필드입니다." }),
});

export default function SigninPage() {
  const router = useNavigate();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: SigninPayload) => await login(payload),
    onSuccess: (data) => {
      if (data && data.result) {
        localStorage.setItem("accessToken", data.result.accessToken);
      }
      router("/");
    },
  });

  const submitHandler = async (values: z.infer<typeof signinSchema>) => {
    await mutateAsync(values);
  };

  return (
    <div className="w-[400px] px-5 flex flex-col justify-center">
      <div className="w-full flex items-center justify-center">
        <LogoIcon />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="w-full mt-4 flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="loginId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="아이디" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" {...field} placeholder="비밀번호" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            type="submit"
            variant="ghost"
            size="default"
            className="bg-[#593EEC] mt-6 text-white font-medium flex items-center justify-center"
          >
            {isPending ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              "로그인"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
