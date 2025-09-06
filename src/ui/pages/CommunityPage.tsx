import CommunityHeroBanner from "@/ui/sections/CommunityPage/CommunityHeroBanner";
import AboutCommunity from "@/ui/sections/CommunityPage/AboutCommunity";
import CommunityProfiles from "@/ui/sections/CommunityPage/CommunityProfiles";
import {useEffect} from "react";

export default function CommunityPage() {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <div className={"min-w-screen "}>
            <CommunityHeroBanner
                                 slides={[
                                     {
                                         src: "/community/community-1.png",
                                         alt: "Mentorinnen und Schülerinnen im Workshop",
                                         title: "Community, die dich nach vorne bringt",
                                         subtitle: "Tritt unserer WhatsApp-Community bei und vernetze dich.",
                                         ctaLabel: "Jetzt beitreten",
                                         ctaHref: "#whatsapp",
                                     },
                                     {
                                         src: "/community/community-2.png",
                                         alt: "Coding-Session in der Schule",
                                         title: "Lerne, teile, wachse",
                                         subtitle: "Wissen austauschen und gemeinsam Chancen eröffnen.",
                                     },
                                     {
                                         src: "/community/community-3.png",
                                         alt: "Event mit Speakerin",
                                         title: "Events & Role Models",
                                         subtitle: "Lass dich inspirieren – oder werde selbst Role Model.",
                                         ctaLabel: "Termine ansehen",
                                         ctaHref: "#events",
                                     },
                                 ]}/>
            <AboutCommunity/>
            <CommunityProfiles members={[
                {
                    "id": "alena-petric",
                    "name": "Alena Petric",
                    "role": "Projektleitung · WAFF-Event, Werbekampagne & Schulworkshops",
                    "school": "Wien",
                    "bio": "Alena koordiniert das WAFF-Event, baut Partnerschaften mit Schulen auf und treibt Schulworkshops voran. Ihr Fokus: Mädchen frühzeitig für MINT begeistern und nachhaltige Strukturen an HTLs etablieren.",
                    "quote": "Vernetzung schafft Mut — und Mut verändert Wege.",
                    "photo": "/team/Portrait_AlenaPetric.jpeg",
                    "links": [
                        { "label": "LinkedIn", "href": "#" }
                    ]
                },
                {
                    "id": "lilia-gerber",
                    "name": "Lilia Gerber",
                    "role": "Projektleitung · Website, WAFF-Event, Mini‑Bücher & Diplomarbeitswettbewerb",
                    "school": "Wien",
                    "bio": "Lilia verantwortet die Community‑Website, co‑leitet das WAFF‑Event und entwickelt die Mini‑Bücher‑Reihe sowie den Diplomarbeitswettbewerb. Sie verbindet Organisation, Tech und Community‑Aufbau.",
                    "quote": "Community ist Praxis: sichtbar machen, verbinden, dranbleiben.",
                    "photo": "/team/Portrait_Lilia.jpg",
                    "links": [
                        { "label": "LinkedIn", "href": "#" },
                        { "label": "Mail", "href": "mailto:liliagerber0@gmail.com" }
                    ]
                },
                {
                    "id": "asel-atak",
                    "name": "Asel Atak",
                    "role": "IT & Infrastruktur · Werbekampagne & Mini‑Bücher",
                    "school": "HTL (AT)",
                    "bio": "Asel sorgt für die technische Infrastruktur und bringt Hands‑on‑Know‑how in Workshops und Publikationen ein. Sie verknüpft IT‑Setups mit verständlicher Vermittlung für Schulen.",
                    "quote": "Technik wird stark, wenn viele Hände mitbauen.",
                    "photo": "/team/Portrait_LisaReichel.jpeg",
                    "links": [
                        { "label": "LinkedIn", "href": "#" }
                    ]
                },
                {
                    "id": "lisa-reichl",
                    "name": "Lisa Reichl",
                    "role": "Design & Marketing · Website & Werbekampagne",
                    "school": "HTL (AT)",
                    "bio": "Lisa gestaltet die visuelle Identität und macht Projekte sichtbar – von Web bis Print. Ihr Ziel: Inhalte so aufbereiten, dass sie inspirieren, informieren und Lust aufs Mitmachen machen.",
                    "quote": "Gute Gestaltung öffnet Türen – auch in MINT.",
                    "photo": "/team/Portrait_LisaReichel.jpeg",
                    "links": [
                        { "label": "LinkedIn", "href": "#" }
                    ]
                },
                {
                    "id": "michelle-kerzendorfer",
                    "name": "Michelle Kerzendorfer",
                    "role": "Social Media & Layout · Werbekampagne & Mini‑Bücher",
                    "school": "HTL (AT)",
                    "bio": "Michelle entwickelt Social‑Media‑Formate und Layouts, die junge Zielgruppen direkt erreichen. Sie bringt Geschichten aus der Community auf die Bühne – konsistent, klar, nahbar.",
                    "quote": "Storys verbinden – und verbinden macht stark.",
                    "photo": "/team/Portrait_MichelleKerzendorfer.png",
                    "links": [
                        { "label": "LinkedIn", "href": "#" }
                    ]
                },
                {
                    "id": "sao-mai-nguyen",
                    "name": "Sao Mai Nguyen",
                    "role": "Research & Development · Mini‑Bücher, Diplomarbeitswettbewerb & Werbekampagne",
                    "school": "AT",
                    "bio": "Sao Mai verbindet Recherche mit praktischer Umsetzung. Sie strukturiert Inhalte für Mini‑Bücher und Wettbewerbe und sorgt dafür, dass Projekte Wirkung zeigen und messbar bleiben.",
                    "quote": "Wirkung entsteht, wenn Wissen verständlich wird.",
                    "photo": "/team/Portrait_LisaReichel.jpeg",
                    "links": [
                        { "label": "LinkedIn", "href": "#" }
                    ]
                }
            ]
            }/>
        </div>
    )
}