export function checkPasswordStrength(password) {
  // Rule: non-string or empty → weak
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  let criteria = 0;

  // 1️⃣ Length ≥ 8
  if (password.length >= 8) criteria++;

  // 2️⃣ Uppercase letter
  if (/[A-Z]/.test(password)) criteria++;

  // 3️⃣ Lowercase letter
  if (/[a-z]/.test(password)) criteria++;

  // 4️⃣ Number
  if (/[0-9]/.test(password)) criteria++;

  // 5️⃣ Special character
  if (/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password)) criteria++;

  // Strength mapping (matches tests exactly)
  if (criteria <= 1) return "weak";
  if (criteria <= 3) return "medium";
  if (criteria === 4) return "strong";
  return "very strong";
}