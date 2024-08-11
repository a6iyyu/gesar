import { z } from "zod";

export const RegisterSkema = z.object({
  username: z.string().trim().min(6, { message: "Nama pengguna harus memiliki setidaknya 6 karakter!" }).max(25, { message: "Nama pengguna tidak boleh lebih dari 25 karakter!" }).regex(/[a-zA-Z0-9_]+$/, { message: "Nama pengguna hanya mengandung huruf, angka, dan garis bawah!" }).min(1, { message: "Nama pengguna tidak boleh kosong!" }),
  email: z.string().trim().email({ message: "Email tidak valid!" }).min(1, { message: "Surel tidak boleh kosong!" }).regex(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g, { message: "Surel Anda tidak valid!" }),
  password: z.string().regex(/[A-Z]/, { message: "Kata sandi harus memiliki setidaknya 1 huruf besar!" }).regex(/[0-9]/, { message: "Kata sandi harus memiliki setidaknya 1 angka!" }).min(7, { message: "Kata sandi harus memiliki setidaknya 7 karakter!" }).min(1, { message: "Kata sandi tidak boleh kosong!" }),
  confirm_password: z.string().trim(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Kata sandi tidak cocok!",
  path: ["confirm_password"],
});

export const LoginSkema = z.object({
  username_or_email: z.string().trim().min(1, { message: "Nama/surel tidak boleh kosong!" }),
  password: z.string().trim().min(1, { message: "Kata sandi tidak boleh kosong!" }),
});