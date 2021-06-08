import React, { useEffect } from 'react';
import Nav from '../../components/Header'
import Popup from '../../components/Popup'
import './Detail.scss'

import { useMediaQuery } from '../../assets/js/common';

function Detail({match, Data}) {

	useEffect(() => {
		document.getElementById("detail-scroll").style.opacity = 1;
		document.getElementById("detail-scroll").style.transform = 'initial';
	});

	const item = Data.data[match.params.id];

	// Popup Touch Screen Redirect Set
	const [width] = useMediaQuery();
	const touchRedirect = (url) => {
		if (width > 769){
			window.location.href = url;
		}
	}

	return (
		<div id="Detail">
			<Nav data={item} />
			<div className="detail-layout">
				<div className="detail-section">
					<div className="view-layout px-0" id="detail-scroll">
						<div className="container ft-s-s">
							<div className="detail-desc">
								<Popup
									id = {"info"+item.id}
									title = {item.title}
									maxWidth = "320"
									position = {true}
									top = "25"
									left = "20"							
									padding = {true}
									highlight = {true}
								>
									<ul className="work-info">
										<li><strong>Date:</strong> {item.date}</li>
										<li><strong>Category:</strong> {item.cate}</li>
										<li><strong>Position:</strong> {item.position}</li>
										<li><strong>Stack:</strong> {item.stack}</li>
										{ item.Collabor && <li><strong>Collaborator:</strong> {item.Collabor}</li> }									
									</ul>
								</Popup>
								<Popup
									id = {item.id}
									title = {item.title}
									width = "450"
									position = {true}
									top = "270"
									left = "40"					
									padding = {true}
									highlight = {false}
								>									
									<div className="desc px-0">
										<p>
											<span dangerouslySetInnerHTML = {{__html: item.desc}}></span>
											{ item.rel_urls && " ("}
											{ item.rel_urls && 
												item.rel_urls.map((rel, idx) => {
													return (
														<><a href={rel.url} target="_blank" rel="noopener noreferrer" onTouchStart={()=>touchRedirect(rel.url)}>{rel.title}</a>{item.rel_urls.length-1 !== idx && ", "}</>
													);
												})
											}
											{ item.rel_urls && ") "}
										</p>
										{ item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" onTouchStart={()=>touchRedirect(item.link)}>Visit the website →<br></br></a> }
										{ item.link_mobile && <a href={item.link_mobile} target="_blank" rel="noopener noreferrer" onTouchStart={()=>touchRedirect(item.link_mobile)}>Visit the website(Mobile Only) →<br></br></a> }
										{ item.link_git && <a href={item.link_git} target="_blank" rel="noopener noreferrer" onTouchStart={()=>touchRedirect(item.link_git)}>Visit the Github Code →<br></br></a> }
									</div>	
								</Popup>	

							</div>	
							<div className="row mt-5 m-auto justify-content-center">
								{ item.movie1 && <div className="col-md-6 mb-0 p-0"><div className="detail-video-wrapper"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie1+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  }
								{ item.movie2 && <div className="col-md-6 mb-0 p-0"><div className="detail-video-wrapper video2"><iframe title={item.title} className="detail-video" width="550" height="350" src={item.movie2+'?autoplay=1&showinfo=0&loop=1&mute=1&rel=0'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>  }
							</div>
							<div className="row mb-4 m-auto justify-content-center">
							{ item.img1_full ?
									item.img1 && <div className="col-md-12 mb-0 p-0"><img src={item.img1} className="detail-img" alt={item.title}></img></div>
								 :
								 	item.img1 && <div className="col-md-6 mb-0 p-0"><img src={item.img1} className="detail-img" alt={item.title}></img></div>
								}
								{ item.img2_full ?
									item.img2 && <div className="col-md-12 mb-0 p-0"><img src={item.img2} className="detail-img" alt={item.title}></img></div>
								 :
								 	item.img2 && <div className="col-md-6 mb-0 p-0"><img src={item.img2} className="detail-img" alt={item.title}></img></div>
								}
								{ item.img3_full ?
									item.img3 && <div className="col-md-12 mb-0 p-0"><img src={item.img3} className="detail-img" alt={item.title}></img></div>
								 :
								 	item.img3 && <div className="col-md-6 mb-0 p-0"><img src={item.img3} className="detail-img" alt={item.title}></img></div>
								}
								{ item.img4_full ?
									item.img4 && <div className="col-md-12 mb-0 p-0"><img src={item.img4} className="detail-img img4" alt={item.title}></img></div>
								 :
									item.img4 && <div className="col-md-6 mb-0 p-0"><img src={item.img4} className="detail-img img4" alt={item.title}></img></div> 
								}
							</div>
							
						</div>
					</div>	
				</div>	
			</div>
		</div>
	);
}

export default Detail;

