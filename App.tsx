import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

type Screen = "overview" | "services" | "driving";

const palette = {
  background: "#F4F6F2",
  surface: "#FFFFFF",
  ink: "#172824",
  muted: "#62716A",
  green: "#245C4A",
  greenSoft: "#E5EEE8",
  line: "#DDE5DE",
  gold: "#A66E27",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function InfoCard({
  title,
  description,
  accent,
}: {
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <View style={[styles.card, accent && styles.accentCard]}>
      <Text style={[styles.cardTitle, accent && styles.accentTitle]}>{title}</Text>
      <Text style={[styles.cardBody, accent && styles.accentBody]}>{description}</Text>
    </View>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("overview");

  const navigation: { key: Screen; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "services", label: "Services" },
    { key: "driving", label: "Driving" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.background} />
      <View style={styles.header}>
        <View>
          <Text style={styles.wordmark}>UnterSous</Text>
          <Text style={styles.tagline}>Transportation, delivery and paid driving work</Text>
        </View>
        <View style={styles.mark}>
          <Text style={styles.markLetter}>U</Text>
        </View>
      </View>

      <View style={styles.navigation} accessibilityRole="tablist">
        {navigation.map((item) => {
          const selected = screen === item.key;
          return (
            <Pressable
              key={item.key}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              onPress={() => setScreen(item.key)}
              style={[styles.navItem, selected && styles.navItemSelected]}
            >
              <Text style={[styles.navText, selected && styles.navTextSelected]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {screen === "overview" && (
          <>
            <View style={styles.hero}>
              <Text style={styles.eyebrow}>A DIFFERENT TRANSPORTATION MODEL</Text>
              <Text style={styles.heroTitle}>Mobility that works for people.</Text>
              <Text style={styles.heroBody}>
                UnterSous is being developed as a not-for-profit transportation and delivery service
                that pays participating drivers directly and does not make their compensation depend
                on an individual passenger payment.
              </Text>
            </View>

            <Section title="The service model">
              <InfoCard
                title="Transportation"
                description="Passenger transportation, including qualifying medical and legal journeys that are free to passengers."
                accent
              />
              <InfoCard
                title="Delivery"
                description="Delivery services as part of the same transportation-focused service model."
              />
              <InfoCard
                title="Paid driving opportunities"
                description="Driving work for people who meet the applicable age, licensing, insurance and other legal requirements."
              />
            </Section>

            <Section title="A clear compensation principle">
              <InfoCard
                title="Drivers are paid by UnterSous"
                description="A qualifying no-charge journey for a passenger does not make the driver's work unpaid. Driver compensation is treated separately from passenger charges."
              />
            </Section>
          </>
        )}

        {screen === "services" && (
          <>
            <View style={styles.pageIntro}>
              <Text style={styles.eyebrow}>SERVICES</Text>
              <Text style={styles.pageTitle}>Transportation and delivery</Text>
              <Text style={styles.pageBody}>
                UnterSous is intended to provide passenger transportation and delivery. Qualifying
                medical and legal transportation is intended to be free to passengers.
              </Text>
            </View>
            <Section title="Passenger transportation">
              <InfoCard
                title="Qualifying medical journeys"
                description="No passenger charge for qualifying journeys, subject to the applicable service and funding arrangements."
                accent
              />
              <InfoCard
                title="Qualifying legal journeys"
                description="No passenger charge for qualifying journeys, supported by an appropriate operating or funding arrangement."
              />
              <InfoCard
                title="Other passenger journeys"
                description="Passenger transportation is part of the intended service. Availability and any applicable terms depend on the operating area and service arrangements."
              />
            </Section>
            <Section title="Delivery">
              <InfoCard
                title="Delivery services"
                description="Delivery is part of the intended service offering. Operational availability and terms will be established before launch."
              />
            </Section>
          </>
        )}

        {screen === "driving" && (
          <>
            <View style={styles.pageIntro}>
              <Text style={styles.eyebrow}>DRIVING OPPORTUNITIES</Text>
              <Text style={styles.pageTitle}>A path toward paid driving work</Text>
              <Text style={styles.pageBody}>
                UnterSous intends to help people pursue the licensing steps available to them and,
                once legally eligible, access paid driving opportunities.
              </Text>
            </View>
            <Section title="Before driving work">
              <InfoCard
                title="Licensing support"
                description="Support people in understanding and pursuing the driving-licence process when they reach the minimum age and eligibility requirements in their jurisdiction."
              />
              <InfoCard
                title="Legal eligibility"
                description="Paid driving work begins only after all applicable age, licence, vehicle, insurance, safety and work requirements are met."
              />
            </Section>
            <Section title="Compensation">
              <InfoCard
                title="Direct payment by UnterSous"
                description="Drivers are to be compensated directly by UnterSous under the applicable work and payment arrangements, rather than relying on passengers to pay drivers individually."
                accent
              />
            </Section>
          </>
        )}

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Development status</Text>
          <Text style={styles.noticeBody}>
            This build presents the intended service model. Live bookings, driver onboarding,
            licensing administration, dispatch, payments and production operations are not connected.
          </Text>
        </View>

        <Text style={styles.footer}>UNTERSOUS · MOBILE APP</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: palette.background },
  header: {
    paddingHorizontal: 21,
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wordmark: { color: palette.ink, fontSize: 25, fontWeight: "800", letterSpacing: -0.8 },
  tagline: { color: palette.muted, fontSize: 10, marginTop: 4 },
  mark: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: palette.green,
    alignItems: "center",
    justifyContent: "center",
  },
  markLetter: { color: "#FFFFFF", fontSize: 22, fontWeight: "800" },
  navigation: {
    marginHorizontal: 20,
    padding: 4,
    borderRadius: 13,
    backgroundColor: "#E8EDE7",
    flexDirection: "row",
  },
  navItem: { flex: 1, paddingVertical: 11, alignItems: "center", borderRadius: 10 },
  navItemSelected: { backgroundColor: palette.surface },
  navText: { color: palette.muted, fontSize: 12, fontWeight: "600" },
  navTextSelected: { color: palette.green, fontWeight: "800" },
  content: { padding: 21, paddingBottom: 38 },
  hero: { paddingTop: 25, paddingBottom: 24 },
  eyebrow: { color: palette.green, fontSize: 10, fontWeight: "800", letterSpacing: 1.4, marginBottom: 10 },
  heroTitle: { color: palette.ink, fontSize: 34, lineHeight: 40, fontWeight: "800", letterSpacing: -1.1 },
  heroBody: { color: palette.muted, fontSize: 13, lineHeight: 21, marginTop: 12 },
  pageIntro: { paddingTop: 24, paddingBottom: 19 },
  pageTitle: { color: palette.ink, fontSize: 29, lineHeight: 35, fontWeight: "800", letterSpacing: -0.8 },
  pageBody: { color: palette.muted, fontSize: 13, lineHeight: 21, marginTop: 10 },
  section: { marginTop: 15, marginBottom: 9 },
  sectionTitle: { color: palette.ink, fontSize: 17, fontWeight: "800", marginBottom: 11 },
  card: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.line,
    borderRadius: 15,
    padding: 16,
    marginBottom: 10,
  },
  accentCard: { backgroundColor: palette.greenSoft, borderColor: "#D1E0D5" },
  cardTitle: { color: palette.ink, fontSize: 14, fontWeight: "800" },
  accentTitle: { color: palette.green },
  cardBody: { color: palette.muted, fontSize: 12, lineHeight: 19, marginTop: 6 },
  accentBody: { color: "#496358" },
  notice: {
    backgroundColor: "#F0EBDD",
    borderRadius: 13,
    padding: 14,
    marginTop: 17,
  },
  noticeTitle: { color: palette.gold, fontSize: 11, fontWeight: "800", marginBottom: 5 },
  noticeBody: { color: "#6C5B43", fontSize: 11, lineHeight: 17 },
  footer: { color: "#929D96", fontSize: 9, letterSpacing: 1.2, textAlign: "center", marginTop: 25 },
});
