import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div>
      <p className="banner">Đăng kí</p>
      {/* <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch", ml: "832" },
        }}
        noValidate
        autoComplete="on"
      >
        <div>
          <TextField
            required
            id="names"
            label="Họ và tên"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="email"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="phone-number"
            label="Số điện thoại"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="address"
            label="Địa chỉ"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Mật khẩu"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          className="button-register"
          variant="contained"
          backgroundColor="black"
        >
          Đăng ký
        </Button>
      </Box> */}
    </div>
  );
};

export default Register;
