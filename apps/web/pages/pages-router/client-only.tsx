import { Books } from '../../components/books';
import PageRouterLayout from '../../components/page-router-layout';

export default function PageRouter() {
  return (
    <PageRouterLayout>
      <Books isEditable={true} />
    </PageRouterLayout>
  );
}
