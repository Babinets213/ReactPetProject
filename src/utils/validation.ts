export function validatePasswordRules(password: string) {
  return {
    hasMinLength: password.length >= 10,
    hasNoSpaces: !/\s/.test(password),
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[^a-zA-Z0-9]/.test(password),
  };
}

export function passwordValidator(value: string) {
  const rules = validatePasswordRules(value);

  if (!rules.hasMinLength) return "10 characters minimum";
  if (!rules.hasNoSpaces) return "Cannot contain spaces";
  if (!rules.hasLetter) return "At least one letter";
  if (!rules.hasNumber) return "At least one number";
  if (!rules.hasSpecialChar) return "At least one special character";

  return true;
}

export const passwordValidationRules = {
  required: "Password is required",
  validate: passwordValidator,
};

export type PasswordValidationKey = keyof ReturnType<
  typeof validatePasswordRules
>;

export const passwordChecklist: {
  key: PasswordValidationKey;
  label: string;
}[] = [
  { key: "hasMinLength", label: "10 characters minimum" },
  { key: "hasNoSpaces", label: "Cannot contain spaces" },
  { key: "hasLetter", label: "At least one letter" },
  { key: "hasNumber", label: "At least one number" },
  { key: "hasSpecialChar", label: "At least one special character" },
];

export const emailValidationRules = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    message: "Invalid email address",
  },
};
