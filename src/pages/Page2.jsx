/** @format */

const Page2 = () => {
    return (
        <div>
            <h1>page 2</h1>
            <button onClick={() => (window.location.href = "/page1")}>move to page1</button>
            <button onClick={() => (window.location.href = "/page3")}>move to page3</button>
            <button onClick={() => (window.location.href = "/")}>Home</button>
        </div>
    );
};

export default Page2;
