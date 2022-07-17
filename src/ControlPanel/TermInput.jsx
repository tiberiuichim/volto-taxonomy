import React from 'react';
import { Grid, Button, Label, Input } from 'semantic-ui-react';
import { SEPARATOR } from '../constants';

const MultipleValuesTermInput = (props) => {
  const { entries, onChange } = props;
  const [items, setItems] = React.useState(entries);

  // entries.map((entry, index) => {
  //   setItems([...items, entry]);
  // });

  return entries.map((item, index) => (
    <Input
      value={item}
      key={index}
      onChange={(ev, { value }) => {
        let new_items = items;
        new_items[index] = value;
        setItems(new_items);
        onChange('title', SEPARATOR + new_items.join(SEPARATOR));
        onChange('hierarchy', new_items);
      }}
    />
  ));
};

const TermInput = ({ entry, onChange }) => {
  const [isEditing, setEditing] = React.useState();
  return isEditing ? (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <div>
            <Label>Title</Label>
          </div>
          <MultipleValuesTermInput
            entries={entry.hierarchy}
            onChange={onChange}
          />
        </Grid.Column>
        <Grid.Column>
          <div>
            <Label>Token</Label>
          </div>
          <Input
            value={entry.token}
            onChange={(e, { value }) => {
              onChange('token', value);
            }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button
          compact
          onClick={() => {
            setEditing(false);
          }}
        >
          OK
        </Button>
      </Grid.Row>
    </Grid>
  ) : (
    <Button title={entry.token} compact basic onClick={() => setEditing(true)}>
      <span>{entry.hierarchy.join(SEPARATOR)}</span>
    </Button>
  );
};

export default TermInput;
