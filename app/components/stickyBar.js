import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

function StickyBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        border: "none",
        width: { xs: "100%", lg: "60%" },
        margin: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Image src="/Logo.png" alt="" width={35} height={35} /> */}
          <div className="flex gap-2 items-center">
            <Image src="/Logo.png" alt="" width={35} height={35} />
            <div id="stickyBar-text" className="leading-none text-2xl">
              <span className="tracking-normal text-[black]">LOSANGELES</span>
              <br />
              <span className="tracking-[.030em] text-[#3b485f]">
                MOUNTAINS
              </span>
            </div>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                <Link href="#history-section" sx={{ fontStyle: "italic" }}>
                  HISTORY
                </Link>
                <Link
                  href="#team-section"
                  textAlign="center"
                  sx={{ fontStyle: "italic" }}
                >
                  TEAM
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Link href="#history-section">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: "black",
                  display: "block",
                  fontStyle: "italic",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                01. HISTORY
              </Button>
            </Link>
            <Link href="#team-section">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: "black",
                  display: "block",
                  fontStyle: "italic",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                02. TEAM
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default StickyBar;
