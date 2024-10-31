/** @format */

const Page1 = () => {
    return (
        <div>
            <h1>page 1</h1>
            <button onClick={() => (window.location.href = "/page2")}>move to page2</button>
            <button onClick={() => (window.location.href = "/page3")}>move to page3</button>
            <button onClick={() => (window.location.href = "/")}>Home</button>
        </div>
    );
};

export default Page1;
