export const metadata = { title: "LDN local Next+n8n staging" };
export default function Layout({ children }) {
  return (
    <html lang="ro">
      <body
        style={{
          fontFamily: "system-ui",
          maxWidth: 1100,
          margin: "40px auto",
          background: "#f2f7f5",
          color: "#183528",
        }}
      >
        {children}
      </body>
    </html>
  );
}
