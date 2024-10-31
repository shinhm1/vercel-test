/** @format */

const Page1 = () => {
    return (
        <div>
            <h1>1번</h1>
            <button onClick={() => (window.location.href = "/page2")}>2번</button>
            <button onClick={() => (window.location.href = "/page3")}>3번</button>
            <button onClick={() => (window.location.href = "/")}>홈</button>
        </div>
    );
};

export default Page1;
