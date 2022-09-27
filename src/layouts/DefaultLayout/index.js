import { useStore } from '~/hooks';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ShareModal from '~/components/ShareModal';

function DefaultLayout({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();

    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>{children}</div>
            <Footer />
            {state.showModal ? <ShareModal /> : undefined}
        </div>
    );
}

export default DefaultLayout;
