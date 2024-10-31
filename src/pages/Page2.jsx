/** @format */

const Page2 = () => {
    return (
        <div>
            <h1>2번</h1>
            <button onClick={() => (window.location.href = "/page1")}>1번</button>
            <button onClick={() => (window.location.href = "/page3")}>3번</button>
            <button onClick={() => (window.location.href = "/")}>홈</button>
        </div>
    );
};

export default Page2;
