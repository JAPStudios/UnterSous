import React, { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Role = "passenger" | "driver";
type Service = "Passenger ride" | "Medical transportation" | "Legal transportation" | "Delivery";
type Request = {
  id: string;
  service: Service;
  pickup: string;
  destination: string;
  details: string;
  status: "Draft — not submitted";
};

const services: { label: Service; description: string; symbol: string }[] = [
  { label: "Passenger ride", description: "Everyday transportation", symbol: "↗" },
  { label: "Medical transportation", description: "A qualifying medical journey", symbol: "+" },
  { label: "Legal transportation", description: "A qualifying legal journey", symbol: "§" },
  { label: "Delivery", description: "Move an item from A to B", symbol: "□" },
];

const colors = {
  ink: "#172824",
  muted: "#687771",
  green: "#245C4A",
  greenLight: "#E7F0EB",
  canvas: "#F5F7F3",
  line: "#E1E7E1",
  white: "#FFFFFF",
  gold: "#B47B2D",
};

export default function App() {
  const [role, setRole] = useState<Role>("passenger");
  const [service, setService] = useState<Service>("Passenger ride");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [details, setDetails] = useState("");
  const [request, setRequest] = useState<Request | null>(null);
  const [jurisdiction, setJurisdiction] = useState("");
  const [driverCategories, setDriverCategories] = useState<string[]>([]);
  const [driverDraftSaved, setDriverDraftSaved] = useState(false);

  const serviceNote = useMemo(() => {
    if (service === "Medical transportation" || service === "Legal transportation") {
      return "Qualifying journeys may have no passenger charge. Dispatch requires verified funding authorization. Driver compensation remains separate.";
    }
    if (service === "Delivery") {
      return "Delivery requests are handled separately from passenger transportation.";
    }
    return "Passenger charges and driver compensation are recorded separately.";
  }, [service]);

  function toggleDriverCategory(category: string) {
    setDriverCategories((current) => current.includes(category)
      ? current.filter((item) => item !== category)
      : [...current, category]);
    setDriverDraftSaved(false);
  }

  function saveDriverDraft() {
    if (!jurisdiction.trim() || driverCategories.length === 0) {
      Alert.alert("Application details required", "Enter the jurisdiction and select at least one service category.");
      return;
    }
    setDriverDraftSaved(true);
    Alert.alert("Local application draft saved", "This information has not been submitted. No eligibility review or approval has taken place.");
  }

  function saveDraft() {
    if (!pickup.trim() || !destination.trim()) {
      Alert.alert("Missing journey details", "Enter both a pickup location and a destination.");
      return;
    }
    const id = `US-${Date.now().toString().slice(-7)}`;
    setRequest({
      id,
      service,
      pickup: pickup.trim(),
      destination: destination.trim(),
      details: details.trim(),
      status: "Draft — not submitted",
    });
    Alert.alert(
      "Draft saved on this screen",
      "This prototype does not transmit requests or connect to dispatch. The draft will be lost when the app is closed."
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.canvas} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.topBar}>
          <View>
            <Text style={styles.wordmark}>UnterSous</Text>
            <Text style={styles.tagline}>Transportation · Delivery · Paid driver work</Text>
          </View>
          <View style={styles.mark}><Text style={styles.markText}>U</Text></View>
        </View>

        <View style={styles.roleSwitch}>
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: role === "passenger" }}
            onPress={() => setRole("passenger")}
            style={[styles.roleButton, role === "passenger" && styles.roleButtonActive]}
          >
            <Text style={[styles.roleText, role === "passenger" && styles.roleTextActive]}>Passenger</Text>
          </Pressable>
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: role === "driver" }}
            onPress={() => setRole("driver")}
            style={[styles.roleButton, role === "driver" && styles.roleButtonActive]}
          >
            <Text style={[styles.roleText, role === "driver" && styles.roleTextActive]}>Driver</Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {role === "passenger" ? (
            <>
              <View style={styles.hero}>
                <Text style={styles.eyebrow}>PASSENGER SERVICES</Text>
                <Text style={styles.heading}>Where does the day need to go?</Text>
                <Text style={styles.body}>Request transportation or delivery through one service, with each journey type kept distinct.</Text>
              </View>

              <Text style={styles.sectionTitle}>Choose a service</Text>
              <View style={styles.serviceGrid}>
                {services.map((item) => {
                  const selected = service === item.label;
                  return (
                    <Pressable
                      key={item.label}
                      accessibilityRole="button"
                      accessibilityState={{ selected }}
                      onPress={() => setService(item.label)}
                      style={[styles.serviceCard, selected && styles.serviceCardSelected]}
                    >
                      <View style={[styles.serviceIcon, selected && styles.serviceIconSelected]}>
                        <Text style={[styles.serviceSymbol, selected && styles.serviceSymbolSelected]}>{item.symbol}</Text>
                      </View>
                      <Text style={styles.serviceName}>{item.label}</Text>
                      <Text style={styles.serviceDescription}>{item.description}</Text>
                      <Text style={[styles.radio, selected && styles.radioSelected]}>{selected ? "●" : "○"}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View style={styles.formCard}>
                <Text style={styles.sectionTitle}>Journey details</Text>
                <Text style={styles.fieldLabel}>PICKUP LOCATION</Text>
                <TextInput
                  value={pickup}
                  onChangeText={setPickup}
                  placeholder="Enter pickup address or location"
                  placeholderTextColor="#8A9690"
                  style={styles.input}
                  accessibilityLabel="Pickup location"
                />
                <Text style={styles.fieldLabel}>DESTINATION</Text>
                <TextInput
                  value={destination}
                  onChangeText={setDestination}
                  placeholder="Enter destination"
                  placeholderTextColor="#8A9690"
                  style={styles.input}
                  accessibilityLabel="Destination"
                />
                <Text style={styles.fieldLabel}>ADDITIONAL DETAILS (OPTIONAL)</Text>
                <TextInput
                  value={details}
                  onChangeText={setDetails}
                  placeholder="Accessibility or delivery instructions. Avoid entering sensitive medical or legal details."
                  placeholderTextColor="#8A9690"
                  style={[styles.input, styles.multiline]}
                  multiline
                  textAlignVertical="top"
                  accessibilityLabel="Additional details"
                />
                <View style={styles.notice}>
                  <Text style={styles.noticeTitle}>Service and payment information</Text>
                  <Text style={styles.noticeText}>{serviceNote}</Text>
                </View>
                <Pressable onPress={saveDraft} style={styles.primaryButton} accessibilityRole="button">
                  <Text style={styles.primaryButtonText}>Save request draft</Text>
                  <Text style={styles.buttonArrow}>→</Text>
                </Pressable>
                <Text style={styles.disclaimer}>Prototype only. Saving does not submit a live request, reserve a driver or arrange transportation.</Text>
              </View>

              {request && (
                <View style={styles.requestCard}>
                  <Text style={styles.eyebrow}>LOCAL DRAFT</Text>
                  <Text style={styles.requestId}>{request.id}</Text>
                  <Text style={styles.requestLine}>{request.service}</Text>
                  <Text style={styles.requestLine}>{request.pickup} → {request.destination}</Text>
                  <Text style={styles.pending}>{request.status}</Text>
                </View>
              )}
            </>
          ) : (
            <>
              <View style={styles.hero}>
                <Text style={styles.eyebrow}>DRIVER PORTAL</Text>
                <Text style={styles.heading}>Paid work. Clear requirements.</Text>
                <Text style={styles.body}>Driver access is conditional on legal eligibility, approval and current service-specific requirements.</Text>
              </View>
              <View style={styles.driverCard}>
                <Text style={styles.driverCardTitle}>Driver application</Text>
                <Text style={styles.body}>Start an application draft. Approval is jurisdiction- and service-specific; no driving work may be undertaken through this prototype.</Text>
                <Text style={styles.fieldLabel}>JURISDICTION</Text>
                <TextInput
                  value={jurisdiction}
                  onChangeText={(value) => { setJurisdiction(value); setDriverDraftSaved(false); }}
                  placeholder="Country, state or province"
                  placeholderTextColor="#8A9690"
                  style={styles.input}
                  accessibilityLabel="Driver jurisdiction"
                />
                <Text style={styles.fieldLabel}>SERVICE CATEGORIES REQUESTED</Text>
                {services.map((item) => {
                  const selected = driverCategories.includes(item.label);
                  return (
                    <Pressable
                      key={item.label}
                      onPress={() => toggleDriverCategory(item.label)}
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: selected }}
                      style={styles.driverCategoryRow}
                    >
                      <Text style={[styles.categoryCheck, selected && styles.categoryCheckSelected]}>{selected ? "✓" : ""}</Text>
                      <View style={styles.categoryCopy}>
                        <Text style={styles.checkText}>{item.label}</Text>
                        <Text style={styles.categoryDescription}>{item.description}</Text>
                      </View>
                    </Pressable>
                  );
                })}
                <View style={styles.checkRow}><Text style={styles.checkIcon}>01</Text><Text style={styles.checkText}>Identity and jurisdiction review</Text></View>
                <View style={styles.checkRow}><Text style={styles.checkIcon}>02</Text><Text style={styles.checkText}>Licence, vehicle and insurance eligibility</Text></View>
                <View style={styles.checkRow}><Text style={styles.checkIcon}>03</Text><Text style={styles.checkText}>Required safety and background checks</Text></View>
                <View style={styles.checkRow}><Text style={styles.checkIcon}>04</Text><Text style={styles.checkText}>Approval for selected service categories</Text></View>
                <View style={styles.notice}>
                  <Text style={styles.noticeTitle}>Compensation principle</Text>
                  <Text style={styles.noticeText}>Driver compensation is separate from passenger charges. A free qualifying passenger journey does not mean unpaid driver work.</Text>
                </View>
                <Pressable onPress={saveDriverDraft} style={styles.primaryButton} accessibilityRole="button">
                  <Text style={styles.primaryButtonText}>Save driver application draft</Text>
                  <Text style={styles.buttonArrow}>→</Text>
                </Pressable>
                {driverDraftSaved && <Text style={styles.pending}>Application draft saved locally — not submitted or approved.</Text>}
                <Text style={styles.disclaimer}>This draft is held only in memory. Identity documents, eligibility checks and application submission are not implemented.</Text>
              </View>
              <View style={styles.driverCard}>
                <Text style={styles.driverCardTitle}>Driver workspace</Text>
                <Text style={styles.body}>Once the backend and approval workflows exist, this area will display assigned work, trip status and compensation records.</Text>
                <View style={styles.emptyState}>
                  <Text style={styles.emptyIcon}>⌁</Text>
                  <Text style={styles.emptyTitle}>No live assignments</Text>
                  <Text style={styles.emptyText}>There is no dispatch connection in this build.</Text>
                </View>
              </View>
            </>
          )}
          <Text style={styles.footer}>UNTERSOUS · MOBILE APPLICATION PREVIEW · 0.1.0</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas },
  flex: { flex: 1 },
  topBar: { paddingHorizontal: 22, paddingTop: 12, paddingBottom: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  wordmark: { color: colors.ink, fontSize: 25, fontWeight: "800", letterSpacing: -0.8 },
  tagline: { color: colors.muted, fontSize: 11, marginTop: 3 },
  mark: { width: 42, height: 42, borderRadius: 14, backgroundColor: colors.green, alignItems: "center", justifyContent: "center" },
  markText: { color: colors.white, fontSize: 22, fontWeight: "800" },
  roleSwitch: { marginHorizontal: 22, padding: 4, borderRadius: 13, backgroundColor: "#E9EDE8", flexDirection: "row" },
  roleButton: { flex: 1, paddingVertical: 11, alignItems: "center", borderRadius: 10 },
  roleButtonActive: { backgroundColor: colors.white, shadowColor: "#142B27", shadowOpacity: 0.08, shadowRadius: 5, elevation: 2 },
  roleText: { color: colors.muted, fontSize: 13, fontWeight: "600" },
  roleTextActive: { color: colors.green, fontWeight: "800" },
  content: { padding: 22, paddingBottom: 42 },
  hero: { paddingTop: 22, paddingBottom: 25 },
  eyebrow: { color: colors.green, fontSize: 10, fontWeight: "800", letterSpacing: 1.5, marginBottom: 10 },
  heading: { color: colors.ink, fontSize: 31, lineHeight: 37, fontWeight: "800", letterSpacing: -1.1, maxWidth: 330 },
  body: { color: colors.muted, fontSize: 13, lineHeight: 20, marginTop: 9 },
  sectionTitle: { color: colors.ink, fontSize: 17, fontWeight: "800", marginBottom: 13 },
  serviceGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 23 },
  serviceCard: { width: "48%", minHeight: 133, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, borderRadius: 15, padding: 13, position: "relative" },
  serviceCardSelected: { borderColor: colors.green, backgroundColor: "#F2F7F3" },
  serviceIcon: { width: 30, height: 30, borderRadius: 10, backgroundColor: "#EFF2EE", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  serviceIconSelected: { backgroundColor: colors.green },
  serviceSymbol: { color: colors.ink, fontSize: 17, fontWeight: "700" },
  serviceSymbolSelected: { color: colors.white },
  serviceName: { color: colors.ink, fontSize: 12, fontWeight: "800" },
  serviceDescription: { color: colors.muted, fontSize: 10, lineHeight: 14, marginTop: 4, paddingRight: 8 },
  radio: { position: "absolute", top: 12, right: 12, color: "#AAB4AD", fontSize: 14 },
  radioSelected: { color: colors.green },
  formCard: { backgroundColor: colors.white, borderRadius: 18, padding: 17, borderWidth: 1, borderColor: colors.line },
  fieldLabel: { color: colors.muted, fontSize: 9, fontWeight: "800", letterSpacing: 1, marginTop: 14, marginBottom: 7 },
  input: { minHeight: 47, borderWidth: 1, borderColor: colors.line, borderRadius: 10, paddingHorizontal: 12, color: colors.ink, fontSize: 13, backgroundColor: "#FCFDFC" },
  multiline: { minHeight: 82, paddingTop: 12 },
  notice: { backgroundColor: colors.greenLight, borderRadius: 11, padding: 13, marginTop: 17 },
  noticeTitle: { color: colors.green, fontSize: 11, fontWeight: "800", marginBottom: 5 },
  noticeText: { color: "#496358", fontSize: 11, lineHeight: 17 },
  primaryButton: { minHeight: 50, backgroundColor: colors.green, borderRadius: 11, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 17 },
  primaryButtonText: { color: colors.white, fontSize: 13, fontWeight: "800" },
  buttonArrow: { color: colors.white, fontSize: 19, marginLeft: 10, marginTop: -2 },
  disclaimer: { color: colors.muted, fontSize: 10, lineHeight: 15, marginTop: 12 },
  requestCard: { marginTop: 15, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, borderRadius: 14, padding: 16 },
  requestId: { color: colors.ink, fontSize: 18, fontWeight: "800" },
  requestLine: { color: colors.muted, fontSize: 12, marginTop: 6 },
  pending: { color: colors.gold, fontSize: 11, fontWeight: "800", marginTop: 12 },
  driverCard: { backgroundColor: colors.white, borderRadius: 17, padding: 17, borderWidth: 1, borderColor: colors.line, marginBottom: 14 },
  driverCardTitle: { color: colors.ink, fontSize: 17, fontWeight: "800" },
  checkRow: { flexDirection: "row", alignItems: "center", marginTop: 17 },
  checkIcon: { width: 29, height: 29, borderRadius: 9, overflow: "hidden", textAlign: "center", textAlignVertical: "center", color: colors.green, backgroundColor: colors.greenLight, fontSize: 10, fontWeight: "800", paddingTop: 7 },
  checkText: { color: colors.ink, fontSize: 12, marginLeft: 10, flex: 1 },
  driverCategoryRow: { flexDirection: "row", alignItems: "center", paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: colors.line },
  categoryCheck: { width: 23, height: 23, borderRadius: 7, borderWidth: 1, borderColor: "#B7C2BA", textAlign: "center", textAlignVertical: "center", color: colors.white, fontSize: 14, overflow: "hidden" },
  categoryCheckSelected: { backgroundColor: colors.green, borderColor: colors.green },
  categoryCopy: { flex: 1 },
  categoryDescription: { color: colors.muted, fontSize: 10, marginLeft: 10, marginTop: 2 },
  emptyState: { backgroundColor: colors.canvas, borderRadius: 12, alignItems: "center", padding: 22, marginTop: 17 },
  emptyIcon: { color: colors.green, fontSize: 29 },
  emptyTitle: { color: colors.ink, fontSize: 13, fontWeight: "800", marginTop: 5 },
  emptyText: { color: colors.muted, fontSize: 11, marginTop: 4, textAlign: "center" },
  footer: { color: "#929D96", fontSize: 9, letterSpacing: 1.1, textAlign: "center", marginTop: 24 },
});