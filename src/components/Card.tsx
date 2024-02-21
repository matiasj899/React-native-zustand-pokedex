import React from "react";
import useStore from "../store/rootStore";
import { Text, Card as CardRNE, Button, Icon } from "@rneui/themed";
import {
  Button as ButtonRNP,
  Card as CardRNP,
  Text as TextRNP,
} from "react-native-paper";

const Card = ({ name, image, url, number }) => {
  const { uiLibrarySelected, openModal } = useStore((state) => ({
    uiLibrarySelected: state.uiLibrarySelected,
    openModal: state.openModal,
  }));

  if (uiLibrarySelected === 1) {
    return (
      <CardRNE>
        <CardRNE.Title> #{number}</CardRNE.Title>
        <CardRNE.Divider />
        <CardRNE.Image
          style={{ padding: 0 }}
          source={{
            uri: image,
          }}
        />
        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          {name?.toUpperCase()}
        </Text>
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Show details"
          onPress={() => openModal()}
        />
      </CardRNE>
    );
  }
  return (
    <CardRNP>
      <CardRNP.Content>
        <TextRNP variant="titleLarge" style={{ textAlign: "center" }}>
          #{number}
        </TextRNP>
      </CardRNP.Content>
      <CardRNP.Cover source={{ uri: image }} />
      <TextRNP variant="bodyMedium" style={{ textAlign: "center" }}>
        {name?.toUpperCase()}
      </TextRNP>
      <CardRNP.Actions>
        <ButtonRNP
          icon={{ direction: "ltr", source: "camera" }}
          onPress={() => openModal()}
        >
          Show details
        </ButtonRNP>
      </CardRNP.Actions>
    </CardRNP>
  );
};

export default Card;
