"use client";
import * as z from "zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CardWrapper } from "@/components/extras/card-wrapper";
import { FormError } from "@/components/extras/form-error";
import { FormSucess } from "@/components/extras/form-sucess";
import { useSearchParams } from "next/navigation";

import { LoginSchema } from "@/schemas";
import { signIn, useSession } from "next-auth/react";

import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const { data: session, status } = useSession();
  const router = useRouter();

  // Quitar esto
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }
    const { email, password } = validatedFields.data;
    console.log(email, password);
    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (responseNextAuth?.error) {
      return { error: responseNextAuth?.error };
    }
    if (responseNextAuth?.ok) {
      return { success: "Logueado con exito" };
    }
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((res) => {
          if (res?.error) {
            form.reset();
            setError(res?.error);
          }
          if (res?.success) {
            form.reset();
            setSuccess(res?.success);
            toast.success("Logged in successfully!");
          }
        })
        .catch((e) => {
          toast.error("Something went wrong");
          setError("Something went wrong");
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Bienvenido"
      backButtonLabel="No tienes una cuenta?"
      backButtonHref="/auth/signUp"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSucess message={success} />
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Iniciando Sesion" : "Iniciar Sesion"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
