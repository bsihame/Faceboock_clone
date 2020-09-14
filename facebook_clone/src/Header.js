import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header_left">
				<img
					src="http://www.pngplay.com/wp-content/uploads/3/Facebook-Logo-PNG-Clipart-Background.png"
					alt="facebook_logo"
				></img>
				<div className="header_input">
					<SearchIcon />
					<input type="test" />
				</div>
			</div>

			<div className="header_middle">
				<div className="header_option">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header_option">
					<FlagIcon fontSize="large" />
				</div>
				<div className="header_option">
					<SubscriptionsIcon fontSize="large" />
				</div>
				<div className="header_option">
					<StorefrontIcon fontSize="large" />
				</div>
				<div className="header_option">
					<SupervisedUserCircleRoundedIcon fontSize="large" />
				</div>
			</div>

			<div className="header_right">
				<div className="header_info">
					<AccountCircleRoundedIcon fontSize="large" />
					<h4>snaag</h4>
				</div>

				<IconButton>
					<AddRoundedIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
