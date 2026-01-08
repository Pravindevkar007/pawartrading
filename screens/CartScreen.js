import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
  Share,
} from "react-native";
import Cart from "../components/Cart";
import { useLanguage } from "../context/LanguageContext";

const CartScreen = ({ navigation, cartItems, setCartItems }) => {
  const { t } = useLanguage();
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const sendWhatsAppReceipt = async (phoneNumber) => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    let receiptText = `🛒 *${t("storeName")} ${t("receipt")}*\n\n`;
    receiptText += `📅 ${t("date")}: ${new Date().toLocaleDateString()}\n`;
    receiptText += `🕐 ${t("time")}: ${new Date().toLocaleTimeString()}\n\n`;
    receiptText += `*${t("items")}:*\n`;

    cartItems.forEach((item) => {
      receiptText += `• ${t(item.name)} x${item.quantity} = ₹${
        item.price * item.quantity
      }\n`;
    });

    receiptText += `\n*${t("summary")}:*\n`;
    receiptText += `${t("subtotal")}: ₹${subtotal}\n`;
    receiptText += `${t("tax")}: ₹${tax}\n`;
    receiptText += `*${t("total")}: ₹${total}*\n\n`;
    receiptText += `${t("thankYou")} 🙏`;

    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(receiptText)}`;
    const webUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(receiptText)}`;

    try {
      const appSupported = await Linking.canOpenURL(appUrl);
      if (appSupported) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
      setCartItems([]);
      Alert.alert(t("success"), t("receiptSent"), [
        { text: t("ok"), onPress: () => navigation.navigate("Home") },
      ]);
    } catch (error) {
      Alert.alert(t("error"), t("failedToSendReceipt"));
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert(t("emptyCart"), t("pleaseAddItems"));
      return;
    }
    navigation.navigate("Receipt");
  };

  const handleWhatsAppSend = () => {
    if (cartItems.length === 0) {
      Alert.alert(t("emptyCart"), t("pleaseAddItemsWhatsApp"));
      return;
    }

    Alert.alert(t("chooseNumber"), t("selectWhatsAppNumber"), [
      { text: t("cancel"), style: "cancel" },
      // {
      //   text: `${t('Pravin Devkar')} : +91 8806061531`,
      //   onPress: () => sendWhatsAppReceipt("918806061531"),
      // },
      {
        text: `${t('Suraj Pawar')} : +91 9307039174`,
        onPress: () => sendWhatsAppReceipt("919307039174"),
      },
      {
        text: `${t('Sunny Pawar')} : +91 8412863274`,
        onPress: () => sendWhatsAppReceipt("918412863274"),
      },
    ]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{t("cart")}</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>{t("emptyCart")}</Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.shopButtonText}>{t("startShopping")}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutText}>
              {t("proceedToCheckout")} - ₹{total}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={handleWhatsAppSend}
          >
            <Text style={styles.whatsappText}>
              📱 {t("sendReceiptWhatsApp")}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF6B35",
    marginVertical: 20,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  shopButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  shopButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF6B35",
    padding: 18,
    alignItems: "center",
    margin: 15,
    borderRadius: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    padding: 18,
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  whatsappText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
