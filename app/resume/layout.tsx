export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return children without additional wrapper - the resume page handles its own styling
  return <>{children}</>;
}
