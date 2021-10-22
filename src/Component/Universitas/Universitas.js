import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import "./Universitas.css";


export default class Handphone extends Component {
    constructor(props) {
		super(props);
		this.state = {
			recipe: [],
			visible: false,
		};
	}
	
	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:3000/data",
			headers: {
				accept: "*/*",
			},
		})
		.then((data) => {
			console.log(data.data);
			this.setState({
				recipe: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div style={{ backgroundColor: "white", marginTop:"15vh" }}>
        		<div style={{marginLeft:"50px"}}>
					<div className="utama" >
						<h1 className="utamaTitle">{this.props.title}</h1>
						<p className="utamaSubTitle">{this.props.subTitle}</p>
						<hr className="garis"/>
					</div>
					<Grid container
			
						md={11}
						spacing={4}
						direction="column"
						justifyContent="flex-start"
						alignItems="strech" 
						>

						{this.state.recipe.map((results, index) => {
							return (
								<Link to="/Daftar_Universitas" style={{textDecoration:"none", color:"black"}}>
									<Grid 
									
										item key={results.nama}
										className="shadow"
										style={{
											display:"flex",
											borderRadius:"10px",
											margin: "20px 0px 25px 40px",
											padding:"25px",
											backgroundColor:"#2bbcff"
											
										}}>
										<Grid md={3}>
											<Card>
													<CardActionArea>
														<CardContent style={{ backgroundColor: "#EEEEEE", color: "#2c3131" }} >
																<CardMedia
																	className="card"
																	component="img"
																	image={results.gambar}/>
														</CardContent>
													</CardActionArea>
											</Card>
										</Grid>
										<Grid style={{padding:"30px" }} md={9}>
											<h3>{results.nama}</h3>
											<p>{results.lokasi}</p>
											<p>{results.keterangan}</p>
										</Grid>
									</Grid>
								</Link>

						);})}
					</Grid>                
				</div>
      		</div>   
		)}
}