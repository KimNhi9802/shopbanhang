import { FaUser } from "react-icons/fa";
function FormDangnhap() {
  return (
    <>
      <div className="wrapper">
        <from action=" ">
          <h1>ĐĂNG NHẬP</h1>
          <p>
            Chưa có tài khoản? Kết nối nhanh chóng với NiHi Shop bằng số điện
            thoại mà ko cần đăng kí
          </p>
          <div className="input-box">
            <input type="text" placeholder="Tên người dùng" required />
            <FaUser className="icon" />
          </div>
          <p>
            {" "}
            <button type="submit"> Đăng nhập</button>
          </p>
        </from>
      </div>
    </>
  );
}

export default FormDangnhap;
