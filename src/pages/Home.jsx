/** @format */

const Home = () => {
    return (
        <div>
            <h1>Vercel Test</h1>
            <button onClick={() => (window.location.href = "/page1")}>move to page1</button>
            <button onClick={() => (window.location.href = "/page2")}>move to page2</button>
            <button onClick={() => (window.location.href = "/page3")}>move to page3</button>
        </div>
    );
};

export default Home;
