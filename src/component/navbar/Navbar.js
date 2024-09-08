import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="row text-center align-items-center justify-content-center" style={{height: '50px'}}>
                <span className="col col-sm-2 order-sm-1"><a className="btn" href="/">TRANG CHỦ</a></span>
                <span className="col col-sm-2 order-sm-2"><a className="btn"  href="/history">TIỂU SỬ</a></span>
                <span className="col col-sm-2 order-sm-3"><a className="btn"  href="/">HỌC VẤN</a></span>
                <span className="col col-sm-2 order-sm-4"><a className="btn"  href="/">SỰ NGHIỆP</a></span>
                <span className="col col-sm-2 order-sm-5"><a className="btn"  href="/">SỞ THÍCH</a></span>
                <span className="col col-sm-2 order-sm-6"><a className="btn"  href="/">LIÊN HỆ</a></span>
            </div>
        );
    }
}

export default Navbar;