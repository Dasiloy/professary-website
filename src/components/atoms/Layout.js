import PageHead from "./PageHead";
import PageLayout from "./PageLayout";

function Layout({ title, content, children }) {
  return (
    <div>
      <PageHead title={title} content={content} />
      <PageLayout>{children}</PageLayout>
    </div>
  );
}

export default Layout;
