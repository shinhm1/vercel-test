/** @format */

const Page3 = () => {
    return (
        <div>
            <h1>page 3</h1>
            <button onClick={() => (window.location.href = "/page1")}>move to page1</button>
            <button onClick={() => (window.location.href = "/page3")}>move to page2</button>
            <button onClick={() => (window.location.href = "/")}>Home</button>
        </div>
    );
};

export default Page3;
