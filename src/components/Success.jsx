import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 80,
        },
    },
};

const Success = ({ onReset }) => {
    return (
        <motion.div
            className="success-message"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                background: "#f0fff4",
                border: "2px solid #38a169",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
            }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                style={{ fontSize: "3rem", color: "#38a169", marginBottom: "1rem" }}
            >
                🎉
            </motion.div>
            <h2 style={{ color: "#2f855a", fontSize: "1.8rem" }}>
                Form Submitted Successfully!
            </h2>
            <p style={{ margin: "1rem 0", color: "#2f855a" }}>
                Thank you. We’ve received your information.
            </p>

            <button
                onClick={onReset}
                style={{
                    marginTop: "1.5rem",
                    padding: "0.6rem 1.2rem",
                    backgroundColor: "#38a169",
                    borderRadius: "6px",
                    color: "#fff",
                    fontWeight: "bold",
                }}
            >
                Fill New Form
            </button>
        </motion.div>
    );
};

export default Success;
