import { useEffect } from "react";
import { useRouter } from "next/router";

import ROUTES from "../routes";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.SURVIVORS);
  });

  return null;
}
