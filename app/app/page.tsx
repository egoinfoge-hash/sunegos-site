export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(80% 60% at 50% 0%, #0ea5e9 0%, #0f172a 60%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1 style={{fontSize: "56px", lineHeight: 1.1, margin: 0}}>Sunegos</h1>
        <p style={{opacity: .85, fontSize: "18px", marginTop: "12px"}}>
          Next.js-ზე აწყობილი პირველი ვერსია! ✨ მალე დაემატება დიზაინი, სექციები და ანიმაციები 💫
        </p>
        <a
          href="mailto:sandro.sandro78@yahoo.com"
          style={{
            display: "inline-block",
            marginTop: "26px",
            padding: "12px 18px",
            borderRadius: "12px",
            background: "white",
            color: "#0f172a",
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          Contact
        </a>
      </div>
    </main>
  );
}
