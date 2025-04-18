interface Props {
  date: string;
  className?: string;
}

export const FormattedDate: React.FC<Props> = ({date, className}) => {
  const asDate = new Date(date);
  return (
    <div className={className}>
      {asDate.toLocaleString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>
  );
};

export default FormattedDate;
