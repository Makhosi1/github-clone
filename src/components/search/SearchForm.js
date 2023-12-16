import "./SearchForm.scss";

export default function SearchForm(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type ="search"
            value =""
            onchange = ""
            placeholder="github"
            />
        </form>
    )
};