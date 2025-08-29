import z from "zod";

const emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRules = {
  minLength: 10,
  hasNoSpaces: /^\S*$/,
  hasLetter: /[a-zA-Z]/,
  hasNumber: /\d/,
  hasSpecialChar: /[^a-zA-Z0-9]/,
};

export function createSignupSchema(t: (key: string) => string) {
  return z.object({
    email: z
      .string()
      .nonempty({ message: t("validation.email.required") })
      .refine((val) => emailRule.test(val), {
        message: t("validation.email.invalid"),
      }),
    password: z
      .string()
      .nonempty({ message: t("validation.password.required") })
      .min(passwordRules.minLength, {
        message: t("validation.password.minLength"),
      })
      .regex(passwordRules.hasNoSpaces, {
        message: t("validation.password.noSpaces"),
      })
      .regex(passwordRules.hasLetter, {
        message: t("validation.password.letter"),
      })
      .regex(passwordRules.hasNumber, {
        message: t("validation.password.number"),
      })
      .regex(passwordRules.hasSpecialChar, {
        message: t("validation.password.specialChar"),
      }),
  });
}

export type SignupSchema = ReturnType<typeof createSignupSchema>;
export type SignupFormFields = z.infer<SignupSchema>;
