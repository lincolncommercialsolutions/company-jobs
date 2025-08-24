import { View, Text } from "react-native";

export default function JobCard({ job, children }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        marginBottom: 15
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{job.title}</Text>
      <Text style={{ marginBottom: 10 }}>{job.description}</Text>
      {children}
    </View>
  );
}
