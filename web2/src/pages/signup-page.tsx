import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signup } from "@/services/members.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signupSchema = z.object({
  loginId: z
    .string()
    .min(1, { message: "해당 필드는 필수 입력 필드입니다." })
    .max(15, { message: "해당 필드는 15자 이하여야 합니다." }),
  username: z
    .string()
    .min(1, { message: "해당 필드는 필수 입력 필드입니다." })
    .max(15, { message: "해당 필드는 15자 이하여야 합니다." }),
  gender: z.string().min(1, { message: "해당 필드는 필수 입력 필드입니다." }),
  password: z.string().min(1, { message: "해당 필드는 필수 입력 필드입니다." }),
  checkPassword: z
    .string()
    .min(1, { message: "해당 필드는 필수 입력 필드입니다." }),
  phoneNumber: z
    .string()
    .min(1, { message: "해당 필드는 필수 입력 필드입니다." }),
});

export default function SignupPage() {
  const router = useNavigate();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      loginId: "",
      username: "",
      gender: "",
      password: "",
      checkPassword: "",
      phoneNumber: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: SignupPayload) => await signup(payload),
    onSuccess: () => {
      router("/login");
    },
  });

  const submitHandler = async (values: z.infer<typeof signupSchema>) => {
    await mutateAsync(values);
  };

  return (
    <div className="w-[400px] px-5 flex flex-col justify-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-[20px] font-semibold">회원정보를 입력해주세요.</h2>
        <p className="text-[14px]">아이디 비밀번호</p>
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
          <FormField
            control={form.control}
            name="checkPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="비밀번호 확인"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="닉네임" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormControl>
                  <Input {...field} placeholder="성별" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="휴대폰 번호" />
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
              "회원가입"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
