import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css';

export default function Infobox({ info }) {
  let hot_url = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let cold_url = "https://images.unsplash.com/photo-1550077404-c00d89693129?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainy_url = "https://plus.unsplash.com/premium_photo-1666258224619-a018ae456f86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!info) return <h2>Loading...</h2>;

  return (
    <div className="Infobox">
      <h1>Weather Info</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? rainy_url
              : info.temp > 15
              ? hot_url
              : cold_url
          }
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min temp = {info.tempMin}</p>
            <p>Max temp = {info.tempMax}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
