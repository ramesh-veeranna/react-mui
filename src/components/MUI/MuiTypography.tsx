import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6" gutterBottom>Heading 6</Typography>
      <Typography>Default Theme using by Material UI</Typography>
      <Typography gutterBottom>https://mui.com/material-ui/customization/default-theme/</Typography>

      <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum dignissimos aut totam cumque officia eum, pariatur veniam molestias nostrum porro nam quis nobis, magni iste ratione praesentium consequatur architecto?</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum dignissimos aut totam cumque officia eum, pariatur veniam molestias nostrum porro nam quis nobis, magni iste ratione praesentium consequatur architecto?</Typography>

      <Typography variant="subtitle1">Simple Sub Title 1</Typography>
      <Typography variant="subtitle2">Simple Sub Title 2</Typography>
    </div>
  );
};

export default MuiTypography;
