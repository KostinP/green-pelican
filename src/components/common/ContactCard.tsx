import { type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="p-10 text-center hover:shadow-xl transition-shadow border-gray-100">
        <CardContent className="flex flex-col items-center">
          <Icon className="w-10 h-10 text-gray-800 mb-4" />
          <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed break-all">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}