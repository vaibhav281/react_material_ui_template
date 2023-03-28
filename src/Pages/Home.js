import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    width: 'auto',
    paddingTop: '40.25%', // 16:9
    
  },
}));

function Home() {
  const classes = useStyles();

  return (
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              className={classes.media}
              
              image="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=2560&h=400&fm=webp"
              title="Welcome to our Tech Website"
            />
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to our Tech Website
              </Typography>
              <Typography variant="body1" gutterBottom>
                We are passionate about technology and bringing the latest news and trends to our readers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae est earum incidunt et unde, illum vitae maxime itaque similique! Aperiam sunt, aliquam odio ipsam incidunt debitis. Neque, cumque assumenda laborum, eveniet omnis commodi, fugiat velit illum necessitatibus ducimus maxime saepe veritatis doloremque exercitationem odio minus accusamus debitis. Ex perspiciatis suscipit, necessitatibus omnis vero dolore nihil sit ab alias odit nisi iste commodi reiciendis ad illum deserunt. Impedit, accusantium repudiandae.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2" gutterBottom>
              Latest News
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quia est, nostrum debitis accusamus earum quo amet consequuntur atque repellendus facere beatae autem accusantium obcaecati similique voluptate error, sit, iste quae dolorem cupiditate aspernatur! Possimus sunt aliquam dignissimos quos illo ab! Quaerat, neque tempore sequi distinctio officiis corrupti earum natus quis, dolorem voluptate iure perferendis eaque aliquam. Ipsa dolor voluptatibus quaerat doloremque dolores, deserunt ipsum esse sed ea aliquid fugit quam praesentium ratione natus itaque aperiam sapiente nam nulla iste mollitia! Eum obcaecati consectetur nisi eaque temporibus. Sapiente, ipsa, laborum voluptate porro dolorum nobis quia qui repellat ad tempore nemo in, corporis modi aliquid est dignissimos aliquam illo doloremque. Est rerum voluptatum perspiciatis quaerat, facilis iure sit necessitatibus ducimus impedit ab aliquid quis corrupti in, quos molestiae assumenda tempora ratione eligendi deleniti! Ducimus provident vitae iure laborum fuga facilis deserunt quae sunt, quas sit a nesciunt deleniti dicta veritatis perferendis suscipit, eaque eius earum, voluptates velit tempora molestias. Deleniti, aspernatur. Eligendi, dolor assumenda autem harum sequi expedita? Magnam expedita odit, autem minus consequatur deleniti dolore molestias fuga? Odio atque, dolores a maxime ad molestiae maiores officia pariatur, ducimus quis tempora ipsum nulla modi! Molestiae dolore alias, non quasi deleniti suscipit.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://cdn.pixabay.com/photo/2017/12/26/21/19/circle-3041437_960_720.jpg"
              title="Tech Gadgets"
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Tech Gadgets
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1060&t=st=1679900651~exp=1679901251~hmac=4ce9c4f30037b1952e4d0d0d52735df927793bc8519bb3fd17c720fd7f16c6bd"
              title="Tech Trends"
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Tech Trends
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo aspernatur possimus debitis accusantium ea esse modi, eligendi laudantium incidunt consequuntur? Nulla, sapiente vero repellat, voluptate ipsam, repellendus quos ullam mollitia quae ab laborum?</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
