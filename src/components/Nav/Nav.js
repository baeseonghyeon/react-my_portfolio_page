import React from 'react';
import './Nav.scss'
import { Link } from 'react-router-dom';

function Nav(props) {

	const items = props.data;

	return (
		<div id="Nav">
			{items.length > 1 
			? 
				items.map((item, index) => {
					return (
						<span
							key={index}
							id={item.id} 
							className={item.active ? "nav-toggle active": "nav-toggle inactive" }
							onClick={() => props.onToggle(item.id)}
						>
							<h1>{item.title}</h1>
						</span>
					);
				})
			: 	
				<span className="nav-toggle m-auto text-center pt-2">
					<h1 className="ft-s">[ {items.title} ]</h1>
					<Link to='/'>&lt; Back to home</Link>
				</span>
			}

		</div>
	);
}

export default Nav;

