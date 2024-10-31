/** @format */

const Page3 = () => {
    return (
        <div>
            <h1>3번</h1>
            <button onClick={() => (window.location.href = "/page1")}>1번</button>
            <button onClick={() => (window.location.href = "/page2")}>2번</button>
            <button onClick={() => (window.location.href = "/")}>홈</button>
        </div>
    );
};

export default Page3;
