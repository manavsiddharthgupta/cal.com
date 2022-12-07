import { GetServerSidePropsContext } from "next";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { getAdminLayout as getLayout, Meta } from "@calcom/ui";

import { ssrInit } from "@server/lib/ssr";

function AdminAppsView() {
  const { t } = useLocale();
  return (
    <>
      <Meta title={t("apps")} description={t("apps_description")} />
      <h1>{t("apps_listing")}</h1>
    </>
  );
}

AdminAppsView.getLayout = getLayout;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const ssr = await ssrInit(context);

  return {
    props: {
      trpcState: ssr.dehydrate(),
    },
  };
};

export default AdminAppsView;
