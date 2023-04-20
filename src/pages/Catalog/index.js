import Cartlist from '~/layouts/components/Cartlist/Cartlist';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';

function Catalog() {
    return (
        <div className="row">
            <Sidebar className="col l-3" />
            <Cartlist className="col l-9" />
        </div>
    );
}

export default Catalog;
