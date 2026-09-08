"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Wifi, Globe, Shield, Activity, Cpu } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function NetworkTopologySection() {
  const topologyNodes = [
    {
      title: "Multi-Homed BGP WAN & Dual-ISP Failover",
      desc: "Dual active-active fiber carriers (10 Gbps Tier-1 Primary + 1 Gbps Redundant Line) with sub-second automated BGP route convergence ensuring zero connection loss during upstream ISP cuts.",
      icon: Globe,
      specs: "BGP-4 • 10 Gbps SFP+ • Dual-WAN Load Balancing",
    },
    {
      title: "Global SD-WAN Mesh & IPsec Tunnels",
      desc: "Encrypted full-mesh SD-WAN tunnels connecting corporate headquarters with 6 distributed regional hubs, routing sensitive ERP and database traffic over low-latency cryptographic pathways.",
      icon: Network,
      specs: "IPsec IKEv2 • WireGuard • AES-256 GCM",
    },
    {
      title: "Micro-Segmented 802.1Q VLAN Infrastructure",
      desc: "Isolated Layer-3 broadcast zones with strict inter-VLAN access control lists (ACLs) preventing lateral traversal between IoT, corporate workstations, VoIP phones, and production server racks.",
      icon: Shield,
      specs: "VLAN 10 (Core) • VLAN 20 (Servers) • VLAN 99 (Guest)",
    },
    {
      title: "Enterprise Wi-Fi 6E & 802.1X EAP-TLS",
      desc: "High-density wireless access points delivering seamless roaming across multi-story campuses. Zero shared Wi-Fi passwords — all connections authenticated via dynamic machine certificates.",
      icon: Wifi,
      specs: "WPA3 Enterprise • RADIUS • EAP-TLS Machine Certs",
    },
  ];

  const networkStats = [
    { value: "99.999%", label: "Core Switch Uptime", sub: "Redundant Cisco Nexus core spine" },
    { value: "< 2.5ms", label: "Intra-LAN Core Latency", sub: "Ultra-low latency fiber trunks" },
    { value: "10 Gbps", label: "Backbone Throughput", sub: "High-throughput server SAN interconnects" },
    { value: "0.01%", label: "Average Packet Loss", sub: "Continuous ICMP QoS traffic policing" },
  ];

  return (
    <section id="network-topology" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="14" title="NETWORK ARCHITECTURE & TOPOLOGY" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="High-Availability SD-WAN &"
              line2="Hybrid Network Architecture."
              goldPart="Hybrid Network Architecture."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Designing multi-gigabit enterprise network backbones, redundant BGP routing, cryptographic site-to-site SD-WAN meshes, and zero-trust micro-segmented VLAN infrastructures."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Network Topology 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {topologyNodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard maxTilt={4} className="p-4 sm:p-6 flex flex-col justify-between h-full bg-[#141410]">
                  <div style={{ transform: "translateZ(15px)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shadow-sm"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-gold-primary/90 bg-gold-primary/[0.08] border border-gold-primary/20 px-2.5 py-1 rounded-full">
                        LAYER 2 / 3
                      </span>
                    </div>

                    <h4
                      className="text-base font-bold text-text-main mb-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {node.title}
                    </h4>

                    <p
                      className="text-xs text-text-secondary leading-relaxed mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {node.desc}
                    </p>
                  </div>

                  <div
                    className="text-[11px] font-mono text-gold-primary/80 pt-3 border-t border-white/[0.04]"
                    style={{ transform: "translateZ(18px)" }}
                  >
                    {node.specs}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Network Performance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 border-t border-white/[0.06]">
          {networkStats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-3 sm:p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] text-center"
            >
              <div className="text-xl font-bold text-gold-bright font-mono mb-0.5">{st.value}</div>
              <div className="text-xs font-bold text-text-main mb-0.5">{st.label}</div>
              <div className="text-[10px] text-text-muted">{st.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
