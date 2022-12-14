import React from "react";
import "../../Assets/Styles/Booking/sideSection.css";
import { Button, Backdrop, Fade, Box, Typography, Modal } from "@mui/material";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const SideSection = ({
	setReadyForRequest,
	readyForRequest,
	index,
	setIndex,
	ok,
	setOk,
	v1,
	v3,
	v4,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();

	const handleClick = () => {
		console.log("clicked");
		if (index === 0) {
			setIndex(1);
		} else if (index === 1) {
			if (ok) {
				setIndex(2);
				setOk(false);
			} else {
				toast.error("Please accept the terms and conditions");
			}
		} else if (index === 2) {
			if (readyForRequest) {
				handleOpen();
				setReadyForRequest(false);
				setTimeout(() => {
					navigate("/");
				}, 3000);
			} else {
				toast.error("Please fill all the fields");
			}
		}
	};

	const year = v1.slice(0, 4);
	const month = v1.slice(5, 7);
	const day = v1.slice(8, 10);

	console.log(v1, v3, v4);
	return (
		<div>
			<div className="side-section-image-wrapper">
				<img
					src={require("../../Assets/Images/side-section-image.jpeg")}
					alt="booking-process"
					className="image"
				/>
			</div>

			<div data-attribute-1>Property ID</div>
			<div data-attribute-2>Location</div>

			<div className="booking-side-section-title">Reserved Date</div>
			<div className="booking-side-section-info">
				{format(new Date(Number(year), Number(month), Number(day)), "PPP")}
			</div>
			<div className="booking-side-section-title">Reserved Time</div>
			<div className="booking-side-section-info">{`${v3} Hours`}</div>
			<div className="booking-side-section-title">Attendies</div>
			<div className="booking-side-section-info">{v4} </div>

			<div data-attribute-3>
				<div data-attribute-4>$ 100 * 6 hrs</div>
				<div data-attribute-4>$600</div>
			</div>
			<div data-attribute-3>
				<div data-attribute-4>Processing Fee</div>
				<div data-attribute-4>$40</div>
			</div>

			<div data-attribute-3>
				<div data-attribute-1>Total</div>
				<div data-attribute-1>$640</div>
			</div>

			<Button
				variant="contained"
				onClick={handleClick}
				sx={{
					width: "20vw",
					backgroundColor: "#EA4235",
					color: "white",
					borderRadius: "4px",
					marginTop: "10px",
				}}>
				{index === 2 ? "Request Availability" : "Continue"}
			</Button>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<MdDone size={50} color="green" />
						<Typography id="transition-modal-title" variant="h6" component="h2">
							Request Sent Successfully
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							You will be redirected to home page in 3 seconds
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default SideSection;
