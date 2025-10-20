export const metadata = {
  title: "Sunegos — Portfolio",
  description: "Clean, glossy, animated hero for Sunegos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
