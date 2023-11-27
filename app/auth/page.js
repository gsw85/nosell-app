import AuthMain from "@/app/auth/(components)/main";
import metaheader from "@/components/meta-header";

export const metadata = metaheader("Login");

export default function Auth() {
  return <AuthMain />;
}
