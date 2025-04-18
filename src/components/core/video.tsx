import ReactPlayer, {ReactPlayerProps} from 'react-player';

interface VideoProps {
  url: string;
  width?: number;
  height?: number;
}

const Video: React.FC<VideoProps> = ({url, width, height}) => {
  const defaultVideoProps: ReactPlayerProps = {
    playing: true,
    pip: false,
    loop: true,
    muted: true,
    volume: 0,
    width: '100%',
  };

  if (width) defaultVideoProps.width = width;
  if (height) defaultVideoProps.height = height;

  return <ReactPlayer url={url} {...defaultVideoProps} />;
};

export default Video;
