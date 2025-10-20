export const metadata = {
  title: "Sunegos — Home",
  description: "Welcome to Sunegos site"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Inter, system-ui, Arial",
        backgroundColor: "#0f172a",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
}
