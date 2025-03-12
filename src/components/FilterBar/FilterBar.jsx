import "./FilterBar.css"

export default function FilterBar() {
    return (
        <>
            <div className="filter-body">
                <img src="tt.png" alt="" />
                <select name="" id="category_selector">
                    <option value="">Todas</option>
                    <option value="">categoria 1</option>
                    <option value="">categoria 2</option>
                    <option value="">categoria 3</option>
                    <option value="">categoria 4</option>
                </select>
            </div>
        </>
    );
}