// src/paginas/mensagem/index.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Mensagem({ navigation }) {
  // variable names in english as requested
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [petName, setPetName] = useState("");
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!name.trim() || !message.trim()) {
      Alert.alert(
        "Atenção",
        "Por favor preencha ao menos o Nome e a Mensagem."
      );
      return;
    }

    // success feedback
    Alert.alert("Sucesso", "Mensagem enviada ao tutor.", [
      {
        text: "OK",
        onPress: () => {
          // optionally send data to backend / mock here
          // clear form
          setName("");
          setPhone("");
          setPetName("");
          setMessage("");
          // navigate back to Inbox if you want:
          if (navigation && navigation.goBack) navigation.goBack();
        },
      },
    ]);
  }

  return (
    <KeyboardAvoidingView
      style={styles.shell}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        {/* header with curved vector background */}
        <ImageBackground
          source={require("../../assets/Vector2.png")} // curve design (fallback Vector.png)
          resizeMode="cover"
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerRow}>
            <Image
              source={require("../../assets/Logo-azul.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <TouchableOpacity style={styles.avatarWrap} activeOpacity={0.8}>
              <Image
                source={require("../../assets/avatar.png")}
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* white card with form */}
        <View style={styles.card}>
          <Text style={styles.title}>Envie uma mensagem para o tutor:</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu nome completo"
            placeholderTextColor="#bdbdbd"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu telefone e/ou whatsapp"
            placeholderTextColor="#bdbdbd"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Nome do animal</Text>
          <TextInput
            style={styles.input}
            placeholder="Por qual animal você se interessou?"
            placeholderTextColor="#bdbdbd"
            value={petName}
            onChangeText={setPetName}
          />

          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Escreva sua mensagem"
            placeholderTextColor="#bdbdbd"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

        {/* bottom nav + footer */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../assets/pets-green.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Pets para adoção</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItemActive}>
            <Image
              source={require("../../assets/mensagens.png")}
              style={styles.navIconActive}
            />
            <Text style={styles.navTextActive}>Mensagens</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            2023 - Desenvolvido por Alura. Projeto fictício sem fins comerciais.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  shell: { flex: 1, backgroundColor: "#f2f2f2" },
  container: {
    paddingBottom: 16,
    backgroundColor: "#f2f2f2",
    minHeight: "100%",
  },

  /* HEADER */
  header: {
    height: 160,
    backgroundColor: "#21d2a8",
    justifyContent: "flex-start",
  },
  headerImage: {
    // allow curve image to show rounded right side similar to figma
    width: "100%",
    height: "100%",
  },
  headerRow: {
    paddingTop: 18,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 48,
  },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#21d2a8",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  /* CARD */
  card: {
    marginHorizontal: 14,
    marginTop: -32, // overlap header like Figma
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    // subtle shadow
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    color: "#2a7ae2",
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  label: {
    color: "#2a7ae2",
    marginTop: 8,
    marginBottom: 6,
    fontWeight: "700",
    fontSize: 13,
  },

  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#efefef",
    fontSize: 14,
  },

  textarea: {
    height: 120,
  },

  sendButton: {
    marginTop: 14,
    backgroundColor: "#ff7b7b",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#ff7b7b",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  /* bottom nav */
  bottomNav: {
    marginTop: 18,
    height: 70,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e9e9e9",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navIconActive: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#21d2a8",
  },
  navText: {
    fontSize: 12,
    color: "#7a7a7a",
  },
  navTextActive: {
    fontSize: 12,
    color: "#21d2a8",
    fontWeight: "600",
  },

  /* footer */
  footer: {
    marginTop: 6,
    paddingVertical: 12,
    backgroundColor: "#21d2a8",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
});
